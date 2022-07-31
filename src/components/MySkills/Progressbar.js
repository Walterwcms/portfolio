import styled from "styled-components"

export default function Progressbar(props) {
    const value = props.value
    const name = props.name

    const Bar = styled.div`
      width: 12.7em;
      height: 0.5em;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 100px;
    `;
    const Progress = styled.div`
      height: 100%;
      width:${value};
      background: #10B3E6;
      border-radius: 100px;
    `;

    return (
        <div className={"ProgressBar"}>
            <p>{name}</p>
            <Bar> <Progress/> </Bar>
        </div>
    )
}

