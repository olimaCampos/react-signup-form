import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SocialButton.css'

export const SocialButton = (props) => {
  const facebook = <FontAwesomeIcon icon={props.facebook} size="2xl" />;
  const github = <FontAwesomeIcon icon={props.github} size="2xl" />;
  const linkedin = <FontAwesomeIcon icon={props.linkedin} size="2xl" />;
  return (
    <>
      <div className="socialButtons">
        <span>{facebook}</span>
        <span>{github}</span>
        <span>{linkedin}</span>
      </div>
    </>
  );
};
