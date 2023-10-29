import {useEffect, useState} from 'react';
import MissionSection from '@/components/MissionSection';
import { MissionCard, Milestone, RoleDepartment } from '@/types';
import Slogan from '@/components/Slogan';
import MilestonesSection from '@/components/MilestonesSection';
import RolesSection from '@/components/RolesSection';

export default function About() {
    const [missionCards, setMissionCards] = useState<MissionCard[]>([]);
    const [milestones, setMilestones] = useState<Milestone[]>([]);
    const [roleDepartments, setRoleDepartments] = useState<RoleDepartment[]>([]);

    useEffect(() => {
    
        fetch("/missionSection.json")
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData)
            setMissionCards(jsonData.data);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
        });
        
    
    }, []);

    useEffect(() => {
    
        fetch("/milestone.json")
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData)
            setMilestones(jsonData.data);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
        });
        
    
    }, []);

    useEffect(() => {
    
        fetch("/roleDepartment.json")
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData)
            setRoleDepartments(jsonData.data);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
        });
        
    
    }, []);

    return (
        <div>
            <MissionSection id={"mission-section"} missionCards={missionCards}/>
            <Slogan/>
            <MilestonesSection milestones={milestones} />
            <RolesSection roleDepartments={roleDepartments} />
        </div>
    ); 
    

}