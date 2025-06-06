
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Engr. Segun Falodun, mnmgs, c.engr, comeg, MSc.",
      role: "Managing Director",
      image: "/lovable-uploads/04cfb953-5171-4dcd-ae5d-0ccdb3f010fe.png",
      bio: "Segun Falodun is the Managing Director of Geogreatotechnics & Geodreels Ltd. An astute engineer and geoscientist with over 23 years of experience, he has led numerous large-scale projects across Nigeria and West Africa. He began his career at Wiss Engineering Ltd., executing over 20 cathodic protection and steel structure projects. With strong expertise in water borehole production, petroleum geoscience, geotechnical and corrosion engineering and pipeline construction, Engr. Falodun has successfully completed over 2,500 Vertical Electrical Soundings and a wide range of seismic and NDT works. He holds multiple degrees including a Master's in Petroleum Geoscience (FUPRE), a Master's and PGD in Applied Geophysics (Rivers State University), all with distinctions and is currently pursuing a third M.Sc. in Oil and Gas Energy Management at the University of East London. He is a member of several professional bodies including the NAEGE, NMGS, SEG and COREN.",
      linkedinUrl: "https://www.linkedin.com/in/segun-falodun-37aa295"
    },
    {
      name: "Dave Adoye",
      role: "Geophysics & Water Resources Manager",
      image: "/lovable-uploads/1c3b9263-4ec7-4d2f-be42-ea8385193c3c.png",
      bio: "Dave Adoye leads the Geophysics and Water Resources unit. With over 17 years of field experience and a B.Sc. in Geophysics from Edo State University, he has successfully executed more than 15 solar water projects across Nigeria. He is currently pursuing a Master's degree in Engineering Geology and Hydrology at the University of Port Harcourt. Mr. Adoye is widely respected for pioneering solar borehole solutions in the Niger Delta and is a corporate member of the Nigerian Mining and Geosciences Society (NMGS)."
    },
    {
      name: "Engr. Ochieze Kessington Obinna, COREN",
      role: "Head of Projects & Structural Engineering",
      image: "/lovable-uploads/2ce25b60-d6af-42b4-b358-651bfb03c3d1.png",
      bio: "Kessington Ochieze is a seasoned civil/structural engineer and project management expert with over 25 years of professional experience. He has overseen the design and construction of major projects including residential estates, shopping malls, government facilities, and marine terminal structures across the Niger Delta. He holds a B.Eng. in Civil/Structural Engineering from the University of Port Harcourt and is currently pursuing an M.Eng. in Project Management & Construction at UNN. A corporate member of NSE, COREN, and MASE, Ochieze brings hands-on leadership in structural designs, foundation works, and engineering risk analysis."
    },
    {
      name: "Jones-Ere Alaere",
      role: "Business Development Manager / Independent Technology Consultant",
      image: "/lovable-uploads/2a017ab6-1e0b-40ee-9df5-c49397d70b9f.png",
      bio: "Jones-Ere Alaere is an innovative technology strategist, author, and entrepreneur who bridges business and digital transformation. She holds a BSc in Software Engineering, an MSc in Computing and Information Systems, and is currently pursuing another MSc in Software Engineering. With experience working across startups and enterprise consulting, she helps organizations in energy, engineering, and digital sectors identify technology gaps and implement scalable systems. As founder of Creit Technologies and author of the Code & Contour book series, she brings deep expertise in digital strategy, user-focused innovation, and enterprise modernization. She consults independently for engineering and energy firms seeking future-forward business solutions, with a focus on customer-centric, efficient, and high-impact technology adoption.",
      linkedinUrl: "https://www.linkedin.com/in/alaerejones"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-slate-100 text-slate-700 mb-4 text-sm font-medium px-4 py-2">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet Our Leadership Team</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced team of engineers and professionals brings decades of expertise to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <OptimizedImage 
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full border-4 border-red-100"
                      priority={index < 2}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="text-base text-slate-600 leading-relaxed mb-6">{member.bio}</p>
                {member.linkedinUrl && (
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm" className="text-slate-600 hover:text-red-600 hover:border-red-600">
                      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Linkedin className="h-4 w-4 mr-2" />
                        Connect
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
