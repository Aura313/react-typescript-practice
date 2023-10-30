import React, { useState } from 'react';
import { firstDupElem, uniqElem,uniqChars } from '../problems/techProblems';
interface Props {
  inputStr: string;
  array1: number[];
  array2: number[];
}

const Testing: React.FC<Props> = ({ inputStr, array1, array2 }) => {
  return (
    <div>
        {/* Find the position of the first duplicate element in a string. */}
      {/* <div> First duplicate element idx : {firstDupElem(inputStr)}</div> */}
      {/* Concatenate two arrays and find the unique element from it. */}
      {/* <div> Unique elements : {uniqElem(array1, array2)}</div> */}
      <div> All Unique Chars for {inputStr} : {uniqChars(inputStr) ? "T" : "F"}</div>
    </div>
  );
};

export default Testing;
