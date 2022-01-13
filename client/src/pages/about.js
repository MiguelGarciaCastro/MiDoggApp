import Profilecard from "../components/Profilecard";
import group from '../public/images/group.jpg';

const profiles = [
    {
        "name": "Max",
        "subtitle": "Software Developer",
        "description": "Max likes painting, farming, and philosophy. They are an entry-level coder.",
        "github": "https://maxaeon.github.io/react-portfolio/"
        "email": "mailto:maxaeonparks@gmail.com",
        "image": "../../public/images/beagle.png",
        "id": "card-1 card-object card-object-hf"
    },
    {
        "name": "Miguel",
        "subtitle": "Software Developer",
        "description": "Miguel hopes to develop software which eiher helps people or bring people together; Miguel also enjoys making and listening to music, as well as playing soccer.",
        "github": "https://miguelgarciacastro.github.io/Portfolio_Advance/",
        "email": "mailto:Garciamiguel7700@yahoo.com",
        "image": "../../public/images/pug.png",
        "id": "card-2 card-object card-object-hf"
    },
    {
        "name": "Jason",
        "subtitle": "Software Developer",
        "description": "Jason, in addition to building things, learning, and problem solving, also enjoys hockey and backpacking.",
        "github": "https://github.com/derotto54",
        "image": "../../public/images/boxer.png",
        "id": "card-3 card-object card-object-hf"
    },
    {
        "name": "Travis",
        "subtitle": "Software Developer",
        "description": "Travis is fascinated by technology as well as Health & Fitness.",
        "github": "https://tschram93.github.io/portfolio/",
        "email": "mailto:Tschram93@gmail.com",
        "image": "../../public/images/collie.png",
        "id": "card-4 card-object card-object-hf"
    },

]
export default function aboutpage() {
    return (
        <div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div id="video-box">
                        <iframe width="1340" height="400" src="https://www.youtube.com/embed/qbP2XCGyWRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br />
                        <br />
                    </div>
                    <div id="image-group">
                        <div class="flex-parent flex-start">


                            <div class="flex-child one">
                                <img src="https://www.dropbox.com/s/z59bms55wbkfdo7/barrels.jpg?raw=1" alt="" />
                            </div>
                            
                            <div class="flex-child two">
                                <img src="https://www.dropbox.com/s/hqlfizn8yc5xaa0/beer-taps.jpg?raw=1" alt="" />
                            </div>
                            <div class="flex-child three">
                            <img src="https://www.dropbox.com/s/btdy2jmlnfsbgrq/bar.jpg?raw=1" alt="" />
                            </div>
                            <div class="flex-justify flex-end">
                            <img src={beerImage} alt="beer" />
                            </div>
                            <br />
                        </div>
                    </div>


                </div>
            </div>

            {profiles.map(profile => (
                <Profilecard profile={profile} key={profile.name} />
            ))}
        </div>
    )
}
