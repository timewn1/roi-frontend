import MainContentBlock from "./ContentBlock/mainContentBlock";
import FaqContentBlock from "./ContentBlock/faqContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "main") return <MainContentBlock {...props} />;
  // if (props.type === "service") return <ServiceContentBlock {...props} />;
  if (props.type === "faq") return <FaqContentBlock {...props} />;
  // if (props.type === "service") return <ServiceContentBlock {...props} />;
  // if (props.type === "faq") return <FaqContentBlock {...props} />;
  // if (props.type === "roadmap") return <RoadmapContentBlock {...props} />;
  // if (props.type === "contact") return <ContactContentBlock {...props} />;
  return null;
};

export default ContentBlock;
