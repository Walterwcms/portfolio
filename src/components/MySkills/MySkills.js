import * as s from "./Styledcomponent"
import Progressbar from "./Progressbar";

export default function MySkills() {
    return (
        <s.SectionMySkills>
            <s.H2>Skills</s.H2>
            <s.H3>My technical level</s.H3>
            <s.SkillsProgressBar>
                <Progressbar name={"Javascript"} value={"70%"}/>
                <Progressbar name={"DataBase"} value={"50%"}/>
                <Progressbar name={"HTML"} value={"80%"}/>
                <Progressbar name={"React Js"} value={"70%"}/>
                <Progressbar name={"Node Js"} value={"30%"}/>
                <Progressbar name={"css"} value={"80%"}/>
                <Progressbar name={"Software Mobile"} value={"30%"}/>
            </s.SkillsProgressBar>
        </s.SectionMySkills>
    )
}