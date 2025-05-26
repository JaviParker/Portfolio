import React from 'react';
import Skill from '../Skill/Skill';

interface SkillsGroupProps {

}

const SkillsGroup: React.FC<SkillsGroupProps> = ({ }) => {
   return (
    <div className="flex flex-wrap gap-4">
        <Skill label="React" icon="devicon-react-original colored" />
        <Skill
        label="JavaScript"
        icon="devicon-javascript-plain colored"
        />
        <Skill
        label="TypeScript"
        icon="devicon-typescript-plain colored"
        />
        <Skill label="NextJs" icon="devicon-nextjs-plain" />
        <Skill
        label="Tailwind CSS"
        icon="devicon-tailwindcss-original colored"
        />
        <Skill label="MySQL" icon="devicon-mysql-original colored" />
        <Skill label="NodeJS" icon="devicon-nodejs-plain colored" />
        <Skill label="Python" icon="devicon-python-plain colored" />
        <Skill
        label="Laravel"
        icon="devicon-laravel-original colored"
        />
        <Skill label="Postman" icon="devicon-postman-plain colored" />
        <Skill label="Git" icon="devicon-git-plain colored" />
        <Skill label="GitHub" icon="devicon-github-original" />
        <Skill
        label="React native"
        icon="devicon-react-original colored"
        />
        <Skill label="Vue" icon="devicon-vuejs-plain colored" />
        <Skill label="Php" icon="devicon-php-plain colored" />
        <Skill label="Ionic" icon="devicon-ionic-original colored" />
        <Skill label="Quasar" icon="devicon-quasar-plain colored" />
        <Skill
        label="Firebase"
        icon="devicon-firebase-plain colored"
        />
        <Skill
        label="SonarCube"
        icon="devicon-sonarqube-plain colored"
        />
        <Skill label="Figma" icon="devicon-figma-plain colored" />
    </div>
   );
};

export default SkillsGroup;