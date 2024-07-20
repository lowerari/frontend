import { useState } from "react"

import OrientationModal from "../../../modals/OrientationModal";
import ChainAnalysisModal from "../../../modals/mindfulness/ChainAnalysisModal";
import MissingLinkModal from "../../../modals/mindfulness/MissingLinkModal";

export default function OrientationBehaviorAnalysisPage() {
    const [orientationIsOpen, setOrientationIsOpen] = useState(false);
    const [chainAnalysisIsOpen, setChainAnalysisIsOpen] = useState(false);
    const [missingLinksIsOpen, setMissingLinksIsOpen] = useState(false);

    return(
        <div className="skillsPage">
            <div className="skillsIntro">
                <h1>Orientation and Behavior Analysis</h1>
                <p>Motivate yourself to practice skills by listing the pros and cons of skills practice. View an example of Chain Analysis, and practice it yourself. Finally, to understand missing effective behavior, do a missing links analysis. </p>
            </div>
            <div className="skillsList">
                <div className="skillsCard" onClick={() => setOrientationIsOpen(true)}>
                    <h2>Orientation</h2>
                </div>
                <div className="skillsCard" onClick={() => setChainAnalysisIsOpen(true)}>
                    <h2>Chain Analysis of Problem Behavior</h2>
                </div>
                <div className="skillsCard" onClick={() => setMissingLinksIsOpen(true)}>
                    <h2>Missing Links Analysis</h2>
                </div>
            </div>
            {orientationIsOpen && <OrientationModal setOrientationIsOpen={setOrientationIsOpen} />}
            {chainAnalysisIsOpen && <ChainAnalysisModal setChainAnalysisIsOpen={setChainAnalysisIsOpen} />}
            {missingLinksIsOpen && <MissingLinkModal setMissingLinksIsOpen={setMissingLinksIsOpen} />}
        </div>
    )
}