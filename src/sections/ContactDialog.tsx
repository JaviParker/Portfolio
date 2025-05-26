"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Mail, Calendar, Linkedin, Github, Globe,  BriefcaseBusinessIcon } from "lucide-react";
import { useContactDialog } from "../stores/useContactDialog";
import Button from "../Components/Button/Button";
import emailjs from "emailjs-com";
import { FormEvent, useRef} from "react";
import { toast, Toaster } from "sonner";

export function ContactDialog() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm("service_3jb3maz", "template_rqw3bqm", formRef.current, "iEln8Yc9ZzhspQnmv")
      .then(
        () => {
          toast.success("¡Mensaje enviado con éxito!");
          setOpen(false);
        },
        (error) => {
          toast.error("Error al enviar: " + error.text);
        }
      );
  };
  const handleCopy = () => {
    navigator.clipboard.writeText("javier.martinez.isw@gmail.com");
    toast.success("Email copiado al portapapeles");
  };

  const { isOpen, setOpen } = useContactDialog();
  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      {/* BOTÓN PARA ABRIR EL DIALOG */}
      {/* <Dialog.Trigger asChild>
        <button className="rounded-full px-6 py-3 text-sm font-medium text-white shadow-md transition hover:scale-105">
          Contact Me
        </button>
      </Dialog.Trigger> */}

      {/* OVERLAY */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" />

        {/* CONTENIDO DEL DIALOG */}
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-[#131313] p-6 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-1 w-12 rounded-full bg-gray-700" />

            {/* Íconos sociales */}
            <div className="flex space-x-4 text-white">
              <a href="https://www.linkedin.com/in/javier-martinez-isw/" target="_blank">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/JaviParker" target="_blank">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank">
                <BriefcaseBusinessIcon size={20} />
              </a>
              <a href="https://tuweb.com" target="_blank">
                <Globe size={20} />
              </a>
            </div>

            {/* Botones de contacto rápido */}
            <div className="flex w-full flex-col sm:flex-row gap-3">
              <a
                onClick={handleCopy}
                href="#"
                className="cursor-pointer flex-1 flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 text-sm text-white hover:bg-white/5 transition "
              >
                <Toaster position="top-center" richColors />
                <Mail size={16}/>  javier.martinez.isw@gmail.com
              </a>

              <a
                className="flex-1 flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 py-2 text-sm text-white cursor-pointer hover:bg-white/5 transition"
                href="https://calendly.com/javier-martinez-isw/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar size={16} /> Book a Call
              </a>
            </div>

            <p className="text-sm text-gray-400">Or send a message</p>

            {/* Formulario */}
            <form ref={formRef} onSubmit={sendEmail} className="w-full space-y-3">
              <input
                name="user_email"
                required
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message"
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400"
              />

              <Button
                label="Send Message"
                type="submit"
                className="w-full"
              />
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
