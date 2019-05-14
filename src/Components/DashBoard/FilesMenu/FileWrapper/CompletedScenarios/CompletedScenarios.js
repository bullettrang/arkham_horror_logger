import React from 'react';
import DevourerBelowSvg from '../../../SVGs/NOZ_SVGS/DevourerBelowSvg';
import GatheringSvg from '../../../SVGs/NOZ_SVGS/GatheringSvg';
import MidnightMasksSvg from '../../../SVGs/NOZ_SVGS/MidnightMasksSvg';
import ExtracurricularSvg from '../../../SVGs/DWL_SVGS/ExtracurricularSVG';
import HouseSvg from '../../../SVGs/DWL_SVGS/HouseSvg';
import MuseumSvg from '../../../SVGs/DWL_SVGS/MuseumSvg';
import EssexCountySvg from '../../../SVGs/DWL_SVGS/EssexCountySvg'
import BloodAltarSvg from '../../../SVGs/DWL_SVGS/BloodAltarSvg';
import UndimensionSvg from '../../../SVGs/DWL_SVGS/UndimensionSvg';
import DoomSvg from '../../../SVGs/DWL_SVGS/DoomSvg';
import LostSvg from '../../../SVGs/DWL_SVGS/LostSvg';
const renderSvg=(scenarioTitle)=>{
    switch(scenarioTitle){
        case 'The Gathering':
            return(
                <GatheringSvg width={25} height={25}/>
            )
        case 'The Midnight Masks':
                return(
                    <MidnightMasksSvg width={25} height={25}/>
                )
        case 'The Devourer Below':
                    return(
                        <DevourerBelowSvg width={25} height={25}/>
                    )
        case "Extracurricular Activities":
                    return(
                        <ExtracurricularSvg width={25} height={25}/>
                    );
        case "The House Always Wins":
            return(
                <HouseSvg width={25} height={25}/>
            );          
        case "The Miskatonic Museum":
            return(
                <MuseumSvg width={25} height={25}/>
            );                
        case "The Essex County Express":
            return(
                <EssexCountySvg width={25} height={25}/>
            );
        case "Blood on the Altar":
            return(
                <BloodAltarSvg width={25} height={25}/>
            );
        case "Undimensioned and Unseen":
            return(
                <UndimensionSvg width={25} height={25}/>
            );
        case "Where Doom Awaits":
            return(
                <DoomSvg width={25} height={25}/>
            ); 
        case "Lost in Time and Space":
            return(
                <LostSvg width={25} height={25}/>
            );                                                     
        default:
                    return(null);
    }
}
const CompletedScenarios = (props)=>{
    if(props.completedScenarios.length<1)
        return null;


    return(
        <React.Fragment>
            {props.completedScenarios.map((e)=>{
                return(
                    <li key={e._id} style={{listStyle:"none"}}>{e.scenarioTitle} {renderSvg(e.scenarioTitle)}</li>
                )
            })}
        </React.Fragment>
    );
}

export default CompletedScenarios;