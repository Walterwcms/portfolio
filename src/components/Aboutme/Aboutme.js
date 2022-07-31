import Facebookicon from "../../assets/images/socialmedia_1/facebook.png"
import Instagramicon from "../../assets/images/socialmedia_1/instagram.png"
import Githubicon from "../../assets/images/socialmedia_1/githup.png"
import Linkedinicon from "../../assets/images/socialmedia_1/linkedin.png"
import Profilepicture from "../../assets/images/perfil/profilepicture.png"
// import Background1perfil from "../../assets/images/perfil/background1_perfil.png"
// import Background2perfil from "../../assets/images/perfil/background2_perfil.png"
import * as s from "./styledcomponent"

export default function Aboutme() {
    return (
        <>
            <s.SectionAbout>
                <s.SubSection>
                    <s.H2>Hey, i'm Walter</s.H2>
                    <s.H3>Software Engineering and Telecommunications Student.</s.H3>
                    <s.H4>In my tasks I seek to build something efficient and with quality.</s.H4>
                    <s.ContentSocialMedia>
                        <img src={Githubicon} alt={"github icon"}/>
                        <img src={Facebookicon} alt={"facebook icon"}/>
                        <img src={Instagramicon} alt={"instagram icon"}/>
                        <img src={Linkedinicon} alt={"linkedin icon"}/>
                    </s.ContentSocialMedia>
                </s.SubSection>
                <pictures>
                    <img src={Profilepicture} alt={"profilepicture"}/>
                    {/*    <img src={Background1perfil} alt={"backgroundImage"}/>*/}
                    {/*    <img src={Background2perfil} alt={"backgroundImage"}/>*/}
                </pictures>
            </s.SectionAbout>
            <s.Span>
                <p> I am a student of computer engineering and telecomunications.
                    My career is just beginnig but I hope to have a oportunity to show
                    my skills and work as a team.
                </p>
            </s.Span>
        </>
    )

}