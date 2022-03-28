import styles from "./LetterList.module.css";
import LetterCard from "../../Components/LetterCard/LetterCard";

const LetterList = (props) => {
  return (
    <>
      <h1>Letter List</h1>
      <div className={styles.container}>
        {props.letters.map(letter => (
          <LetterCard 
            key={letter._id} 
            letter={letter}
            handleDeleteLetter={props.handleDeleteLetter}
          />
        ))}
      </div>
    </>
  );
};

export default LetterList;
