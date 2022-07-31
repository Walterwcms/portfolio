
import * as s from "./Styledcomponent"

export default function Header() {
    return (
        <s.Nav>
            <s.Ul>
                <s.Li><s.Anchor href={"#"}>About me</s.Anchor></s.Li>
                <s.Li><s.Anchor href={"#"}>Skills</s.Anchor></s.Li>
                <s.Li><s.Anchor href={"#"}>Projects</s.Anchor></s.Li>
                <s.Li><s.Anchor href={"#"}>Contact</s.Anchor></s.Li>
            </s.Ul>
            <s.H1>Walter dos Santos</s.H1>
        </s.Nav>
    )
}