import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#18F0FF]">About Me</h2>

          <Card className="bg-[#0A0F24]/50 border-[#E4E4E4]/10">
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90">
                My passion is crystal clear: creating intelligent systems that simplify complex tasks and drive innovation.This wasn't a sudden leap, but a deliberate evolution. 
                While initially working as an Electrical Engineer for 1 year and 9 months, I actively pursued stretch projects within that role, 
                alongside dedicating significant personal time to advanced online courses, YouTube tutorials, and independent projects. 
                This self-driven immersion allowed me to deeply cultivate my skills in Artificial Intelligence and make a strategic transition 
                to a career focused entirely on cutting-edge AI solutions.</p>
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">                  
                Now, as a freelancer, I specialize in crafting intelligent systems that don't just bridge gaps—they obliterate them. 
                My unique blend of foundational engineering discipline and a profound passion for coding, AI, and automation gives me 
                an unparalleled edge. I don't just deliver solutions; I partner with you, digging deep to understand your vision, 
                and then architecting bespoke AI systems that propel your business forward.  </p>
                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">
                <strong>My Expertise in Action: Delivering Tangible Impact</strong><br />
                ∴ <strong>Automation Redefined:</strong> I engineer automated tools that obliterate repetitive tasks and unlock unprecedented levels of operational efficiency.<br />
                <span className="block pl-12">• Proven Impact: Developed an Automated Manual Generator that revolutionizes documentation creation, and a BOM Analyzer & Optimizer that automates critical, complex sourcing processes.</span><br />
                ∴ <strong>Intelligent Systems, Custom Built: </strong>From sophisticated Large Language Model (LLM) agents to powerful Computer Vision applications, I custom-build AI that gets results.<br />
                <span className="block pl-12">• Proven Impact: Created AI-powered Workflow Assistants that seamlessly automate customer queries and streamline backend operations. Pioneered Medical & Industrial Image Analysis solutions (e.g., Brain Tumor Detection, PCB Crack Detection) leveraging state-of-the-art techniques like RAG, LoRA, YOLO, and OpenCV.</span><br />
                ∴ <strong> Strategic Collaboration, Breakthrough Solutions:</strong> My approach is a true partnership. I translate your most ambitious conceptual needs into practical, high-impact AI deployments, ensuring every solution is meticulously aligned with your strategic objectives.
                </p>

                <p className="text-lg leading-relaxed text-[#E4E4E4]/90 mt-4">
                My commitment isn't just to the current project, but to the future of Automation. 
                I relentlessly pursue new advancements and actively contribute to the open-source community. 
                If you're ready to transform your vision into a formidable AI advantage, let's connect. 
                Your next breakthrough project starts here.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
