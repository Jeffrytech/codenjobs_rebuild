// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  // tagsValidator,
  // blogPostBodyValidator,
  solanaPublicKeyValidator
} from "../../../../../../validators";
import { findNFTImageFromPublicKey } from "../../../../../../crypto/solana/metaplex";
import { deleteMainNFT, updateMainNFT, verifyMainNFT } from "../../../../../../api/privateMainNFT";

const mainNFTValidationSchema = Yup.object({
  solanaMainNFTPublicKey: solanaPublicKeyValidator,
});

const useNFTListForm = (
  solanaWalletPublicKey,
  setMainNFT, mainNFT,
  setSnackbarOpen,
) => {

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,
    setFieldError,

    isSubmitting,
    submitForm,
  } = useFormik({
    // initialValues: setInitialValues(data),
    initialValues: {
      solanaMainNFTPublicKey: null, // should be from the database later
      image: null,
    },
    validationSchema: mainNFTValidationSchema,
    onSubmit: async (
      values,
      // actions
    ) => {
      // alert(values.solanaPublicKey);
      // console.log(values);

      // verify ownership with SolanaWalletPublicKey

      // 1. First verify it at frontend -> setError if not the owner
      // 2. Save it at backend
      // 3. Should show the NFTs user holding and give NFTs set main feature directly?
      // 4. Should show at profile and card

      try {
        // if (solanaWalletPublicKey === null) {
        //   return;
        // }

        if (values.image === null) {
          return;
        }

        if (values.solanaMainNFTPublicKey === null) {
          return;
        }

        const {
          isTokenHeldByUserWallet,
          image,
        } = await findNFTImageFromPublicKey(values.solanaMainNFTPublicKey, solanaWalletPublicKey);

        // // alert(image);
        // // console.log("isTokenHeldByOwner");
        // // console.log(isTokenHeldByOwner);

        if (!isTokenHeldByUserWallet) {
        // if (false) { // Use this to test temporarily and buy one instead to test with what you own
          setFieldError("solanaMainNFTPublicKey", "You are not the owner of the NFT");
          await deleteMainNFT();
        } else {
          // Use database request here
          const { data, error } = mainNFT === null ? await verifyMainNFT(
            values.solanaMainNFTPublicKey,
            image,
            "Solana",
          ) : await updateMainNFT(
            values.solanaMainNFTPublicKey,
            image,
            "Solana",
          );

          if (error) {
            console.log("error");
            console.log(error);
            setFieldError("solanaMainNFTPublicKey", "Something went wrong with the verification");
            return;
          }

          if (data === true) {
            setSnackbarOpen(true);
            setMainNFT(image);
          }
        }

        // const { data, error } = mainNFT === null ? await verifyMainNFT(
        //   values.solanaMainNFTPublicKey,
        //   values.image,
        //   "Solana",
        // ) : await updateMainNFT(
        //   values.solanaMainNFTPublicKey,
        //   values.image,
        //   "Solana",
        // );

        // if (error) {
        //   console.log("error");
        //   console.error(error);
        //   setFieldError("solanaMainNFTPublicKey", "Something went wrong with the verification");
          
        //   return;
        // }

        // if (data === true) {
        //   setMainNFT(values.image);
        //   setSnackbarOpen(true);
        // }
        
      } catch (error) {
        // alert(error);
        console.log("catch error");
        console.error(error);
      }
    }
  });

  return {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,
    // setFieldTouched,
    setFieldError,

    isSubmitting,
    submitForm,
  };
};

export default useNFTListForm;
