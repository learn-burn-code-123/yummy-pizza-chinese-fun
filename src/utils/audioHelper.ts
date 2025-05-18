
// Audio helper functions
const playAudio = (fileName: string) => {
  try {
    const audio = new Audio(`/sounds/${fileName}`);
    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  } catch (error) {
    console.error('Error creating audio element:', error);
  }
};

const pronunciationAudio = (ingredientId: string) => {
  playAudio(`${ingredientId}.mp3`);
};

const playSuccessSound = () => {
  playAudio('success.mp3');
};

const playErrorSound = () => {
  playAudio('error.mp3');
};

const playOvenSound = () => {
  playAudio('oven.mp3');
};

export { pronunciationAudio, playSuccessSound, playErrorSound, playOvenSound };
