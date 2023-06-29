import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const PhoneScoreContext = createContext();

export default PhoneScoreContext;

export function PhoneScoreContextProvider({ children }) {
  const [scores, setScores] = useState({ score1: 0, score2: 0, score3: 0 });

  const scoreContextValue = useMemo(
    () => ({
      scores,
      setScores,
    }),
    [scores]
  );

  return (
    <PhoneScoreContext.Provider value={scoreContextValue}>
      {children}
    </PhoneScoreContext.Provider>
  );
}
PhoneScoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePhoneScoreContext = () => useContext(PhoneScoreContext);
