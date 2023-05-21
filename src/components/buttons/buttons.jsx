import icons from 'images/icons.svg';

import {
  BtnLM,
  BigBtnFavor,
  BtnCancelArrow,
  BtnBackArrow,
  BtnAddCurcle,
  BtnAdd,
  BtnHeart,
  BtnRegLog,
  BtnFilter,
  BtnOption,
  BtnToHeart,
  BtnContact,
  YesBtn,
  ArrowLeft,
  Pawprint,
  Add,
  AddCurcle,
  Heart,
  Filter,
  ToHeart,
  City,
  Logout,
  Delete,
  BtnClose,
  PetInfoStyle,
  TexStyletInfo,
  FilterCurcle,
  PetCategoryStyle,
  TexCategoyInfo,
} from '../buttons/buttons.styled';

// componemnts svg

const SvgPawprint = () => {
  return (
    <Pawprint width={24} height={24}>
      <use href={icons + '#icon-pawprint'}></use>
    </Pawprint>
  );
};
const SvgAdd = () => {
  return (
    <Add width={24} height={24}>
      <use href={icons + '#icon-plus-small'}></use>
    </Add>
  );
};
const SvgAddCurcle = () => {
  return (
    <AddCurcle width={24} height={24}>
      <use href={icons + '#icon-plus-small'}></use>
    </AddCurcle>
  );
};
const SvgCancel = () => {
  return (
    <ArrowLeft width={24} height={24}>
      <use href={icons + '#icon-arrow-left'}></use>
    </ArrowLeft>
  );
};
const SvgHeart = () => {
  return (
    <Heart width={24} height={24}>
      <use href={icons + '#icon-heart'}></use>
    </Heart>
  );
};
const SvgToHeart = () => {
  return (
    <ToHeart width={24} height={24}>
      <use href={icons + '#icon-heart'}></use>
    </ToHeart>
  );
};
const SvgFilter = () => {
  return (
    <Filter width={24} height={24}>
      <use href={icons + '#icon-filters-2'}></use>
    </Filter>
  );
};

// Svg and hendle for pet info

export const SvgLocation = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-location'}></use>
    </City>
  );
};
export const SvgClock = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-clock'}></use>
    </City>
  );
};
export const SvgMale = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-male'}></use>
    </City>
  );
};
export const SvgFemale = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-female'}></use>
    </City>
  );
};
export const SvgAge = () => {
  return (
    <City width={24} height={24}>
      <use href={icons + '#icon-location'}></use>
    </City>
  );
};

export const PetInfo = ({ Svg, text, onClick }) => {
  return (
    <>
      <PetInfoStyle onClick={onClick}>
        <Svg />
        <TexStyletInfo> {text}</TexStyletInfo>
      </PetInfoStyle>
    </>
  );
};
export const PetCategory = ({ text, onClick }) => {
  return (
    <>
      <PetCategoryStyle onClick={onClick}>
        <TexCategoyInfo> {text}</TexCategoyInfo>
      </PetCategoryStyle>
    </>
  );
};

//

const SvgDelete = () => {
  return (
    <Delete width={24} height={24}>
      <use href={icons + '#icon-trash'}></use>
    </Delete>
  );
};
const SvgLogout = () => {
  return (
    <Logout width={24} height={24}>
      <use href={icons + '#icon-logout'}></use>
    </Logout>
  );
};
const SvgCloseSmall = () => {
  return (
    <Logout width={24} height={24}>
      <use href={icons + '#icon-cross-small'}></use>
    </Logout>
  );
};

// components btn

export const BtnCloseModal = ({ onClick }) => {
  return (
    <>
      <BtnClose type="button" onClick={onClick}>
        Filter <SvgCloseSmall />
      </BtnClose>
    </>
  );
};
export const BtnLearnMore = ({ onClick }) => {
  return (
    <>
      <BtnLM type="button" onClick={onClick}>
        Learn More
      </BtnLM>
    </>
  );
};
// button for Registration and Login, need write "Registretion or Login" instead "TEXT"
export const BtnAuth = ({ onClick }) => {
  return (
    <>
      <BtnRegLog type="button" onClick={onClick}>
        TEXT
      </BtnRegLog>
    </>
  );
};
// button for Registration and Login, need write
// "lost/foun, sell, in good hand, favorite ads, my ads" instead "text"
export const BtnAddOption = ({ text, onClick }) => {
  console.log(text);
  return (
    <>
      <BtnOption type="button" onClick={onClick}>
        {text}
      </BtnOption>
    </>
  );
};

export const BtnFilters = ({ onClick }) => {
  return (
    <BtnFilter type="button" onClick={onClick}>
      Filter <SvgFilter />
    </BtnFilter>
  );
};
export const BtnFiltersCircle = ({ onClick }) => {
  return (
    <FilterCurcle type="button" onClick={onClick}>
      <SvgFilter />
    </FilterCurcle>
  );
};
export const BtnCall = ({ onClick }) => {
  return (
    <>
      <BtnContact type="button" onClick={onClick}>
        Contact
      </BtnContact>
    </>
  );
};

// components btn + svg
export const BtnLearnMoreFavorite = ({ onClick }) => {
  return (
    <>
      <BigBtnFavor type="button" onClick={onClick}>
        Learn more
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnDone = () => {
  return (
    <>
      <BigBtnFavor type="submit">
        Done
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnNext = ({ onClick }) => {
  return (
    <>
      <BigBtnFavor type="button" onClick={onClick}>
        Next
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};
export const BtnCancel = ({ onClick }) => {
  return (
    <>
      <BtnCancelArrow type="button" onClick={onClick}>
        <SvgCancel />
        Cancel
      </BtnCancelArrow>
    </>
  );
};
export const BtnBack = ({ onClick }) => {
  return (
    <>
      <BtnBackArrow type="button" onClick={onClick}>
        <SvgCancel />
        Back
      </BtnBackArrow>
    </>
  );
};
export const BtnAddPet = ({ onClick }) => {
  return (
    <>
      <BtnAdd type="button" onClick={onClick}>
        Add Pet
        <SvgAdd />
      </BtnAdd>
    </>
  );
};
export const BtnAddPetCurcle = ({ onClick }) => {
  return (
    <>
      <BtnAddCurcle type="button" onClick={onClick}>
        <SvgAddCurcle />
        Add Pet
      </BtnAddCurcle>
    </>
  );
};
export const BtnAddFavorite = ({ onClick }) => {
  return (
    <BtnHeart type="button" onClick={onClick}>
      <SvgHeart />
    </BtnHeart>
  );
};
export const BtnAddTo = ({ onClick }) => {
  return (
    <BtnToHeart type="button" onClick={onClick}>
      Add to
      <SvgToHeart />
    </BtnToHeart>
  );
};
export const BtnCongrats = ({ onClick }) => {
  return (
    <>
      <BigBtnFavor type="button" onClick={onClick}>
        Go to profile
        <SvgPawprint />
      </BigBtnFavor>
    </>
  );
};

export const BtnYesLogout = ({ onClick }) => {
  return (
    <>
      <YesBtn type="button" onClick={onClick}>
        Yes
        <SvgLogout />
      </YesBtn>
    </>
  );
};
export const BtnYesDelete = ({ onClick }) => {
  return (
    <>
      <YesBtn type="button" onClick={onClick}>
        Yes
        <SvgDelete />
      </YesBtn>
    </>
  );
};