import React from "react";
import Projects from "../../components/Project";
import detroit from "../../public/images/detroit.jpg";
import traverse from "../../public/images/traverse.jpg";
import kalamazoo from "../../public/images/kalamazoo.jpg";
import marquette from "../../public/images/marquette.jpg";
import lansing from "../../public/images/lansing.jpg";
import claymation from "../../public/images/claymation.jpg";


const Cities = (singleProject) => {

  const projectList = [
    {
      title: "Detroit",
      image: detroit,
      summary: "Detroit has a variety of dog friendly locations and activities. Belle Isle Beach and the Detroit Dog Park are great for a fun outing with your pup. Go shopping in Moosejaw Clothing Store, or check out one of the many dog-friendly restaurants, including Traffic Jam and Snug and Jolly Pumpkin. If you need doggie daycare, check out Doggie Latchkey, and if your pup needs a vet, there's always Harvey Medical Hospital. If you and your doggo need a place to rest your heads at the end of the day, Aloft Detroit at the David Whitney allows dogs to accompany their owners for stays at no additional charge." 
    },        
    {
      title: "Lansing",
      image: lansing,
      summary: "Lansing has a variety of dog friendly locations and activities. Soldon Dog Park and the Lansing River Trail are great for a fun outing with your pup. If they need veterinary care, Michigan State University's veterinary staff offer some of the best care in the country. After grabbing a bite to eat at Troppo, the Ramada Inn Lansing Hotel & Conference Center allows dogs to accompany their handlers at no additional charge."
    },
    {
      title: "Traverse City",
      image: traverse,
      summary: "Traverse City has a variety of dog friendly locations and activities, and is close to dog-friendly Mackinaw Island. Best Western Plus Traverse City welcomes all dogs for an additional fee of $20 per night, and isn't too far away from The Filling Station Microbrewery. If you need doggie daycare, Aunt Tara's Creative Canine Solutions has you covered, and even offers canine bathing options, but you'll have to look elsewhere such as Banfield Pet Hospital for veterinary care. Check out Traverse Area Recreation Trail and Wags West Dog Park to satisfy you and your dog's outdoor exercise needs."
    },
    {
      title: "Marquette",
      image: marquette,
      summary: "Beautiful views of Lake Superior await you and your 4-legged-friend in Marquette. The Animal Medical Center of Marquette has your dog's back if they need veterinary care during your visit. Check out one of the dog-friendly restaurants such as the Portside Inn, and check into one of the dog-friendly lodging choices available, such as Cozy Camp Loon, which charges an additional fee of $50 per dog per night.",
    },
    {
      title: "At-Home Activities",
      image: claymation,
      summary: "Stuck at home due to bad weather or a lack or dog-friendly activities in your area? Why not try making some art with your pup! Dip their paws in edible children's paint to create dog-print flowers on canvas, or use polymer clay to create a claymation short story of your pup! Example available here: https://youtu.be/5ooCT1aMjsw "
    }];

  return (
    <div key={singleProject.title}>
      <div className="flex-row">
          {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Cities;
