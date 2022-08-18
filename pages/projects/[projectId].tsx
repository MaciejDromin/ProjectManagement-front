import Collapsable from "../../components/Collapsable";
import Heading from "../../components/Heading";
import SmallHeading from "../../components/SmallHeading";
import StatesList from "../../components/StatesList";
import TextDisplay from "../../components/TextDisplay";

const longText = "AAAAAAAAAAAAAAAAAAAAAAA  AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAA"

const ProjectDetailed = () => {
    return (
        <div>
            <Heading title="Project"/>
            <SmallHeading title="Status"/>
            <TextDisplay text={longText}/>
            <Collapsable contentName="States" component={<StatesList statesList={[
                {name: "State1", completed: "Finished", tasks: [{name: "Task1"}, {name: "Task2"}]},
                {name: "State2", completed: "In Progress", tasks: [{name: "Task1"}, {name: "Task2"}]},
            ]}/>} />
        </div>
    );
}

export default ProjectDetailed