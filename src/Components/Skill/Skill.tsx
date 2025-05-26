import React from 'react';
import './Skill.css';
import { Badge } from '../ui/badge';

interface SkillProps {
    label: string;
    icon: string;
}

const Skill: React.FC<SkillProps> = ({ label, icon }) => {
    return (
        <Badge className='text-gray gap-1 font-bold text-sm pt-1 pb-1 pl-3 pr-3 skill-badge'>
            <i className={icon}></i> 
            {label}
        </Badge>
    );
};

export default Skill;