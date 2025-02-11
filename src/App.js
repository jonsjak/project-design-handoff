import React from 'react';
import Header from 'Components/Headercomponents/Header';
import Footer from 'Components/FooterComponents/Footer';
import QuestionCorner from 'Components/QuestionComponents/QuestionCorner';
import Benefits from 'Components/BenefitsComponents/Benefits';
import PickYourPosition from 'Components/PositionComponents/PickYourPosition';
import TeamReviews from 'Components/ReviewComponents/TeamReviews';

export const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Benefits />
      <PickYourPosition />
      <TeamReviews />
      <QuestionCorner />
      <Footer />
    </div>
  )
}
