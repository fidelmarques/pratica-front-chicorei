const creditCardInputMask = {
  mounted(element) {
    element.addEventListener("input", (e) => {
      const creditCardNumber = e.target.value.replace(/\D/g, "");

      const creditCardMask = "#### #### #### ####";

      let maskedNumber = "";
      let j = 0;

      for (let i = 0; i < creditCardMask.length; i++) {
        if (creditCardMask[i] === "#") {
          if (j < creditCardNumber.length) {
            maskedNumber += creditCardNumber[j];
            j++;
          } else {
            break;
          }
        } else {
          maskedNumber += creditCardMask[i];
        }
      }

      e.target.value = maskedNumber;
    });
  },
};

export default creditCardInputMask;
