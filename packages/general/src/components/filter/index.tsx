"use client";

import FilterIcon from "@searchlight/shared/assets/icons/filter.svg";
import FilterEnabledIcon from "@searchlight/assets/icons/filter-enabled.svg";

import Typo from "@searchlight/shared/components/ui/typography";

import s from "./filter.module.scss";
import { useState } from "react";
import { ColorPalette } from "@searchlight/shared/lib/colors";
import Button from "@searchlight/shared/components/ui/button";
import Chip from "../chip";

interface FilterProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setFilter: (value: string) => void;
  filter: string;
}

const Filter = ({ setFilter, filter }: FilterProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className={s.layout}>
      <div className={s.toggle} onClick={() => setModalVisible(!modalVisible)}>
        <FilterIcon />
      </div>
      {modalVisible && (
        <div className={s["modal-container"]}>
          <Typo.LargeTitle color={ColorPalette.Grayscale10}>
            응급실 분류
          </Typo.LargeTitle>
          <div className={s["modal-chip-container"]}>
            <Chip
              label="일반"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
            <Chip
              label="일반격리"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
            <Chip
              label="음압격리"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
            <Chip
              label="코호트격리"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
            <Chip
              label="외상소생실"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
            <Chip
              label="소아"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
            <Chip
              label="소아일반격리"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
            <Chip
              label="소아음압격리"
              selected={filter === "전체"}
              onClick={() => setFilter("전체")}
            />
          </div>
          <div className={s["modal-button-container"]}>
            <Button variants="secondary" size="small">
              초기화
            </Button>
            <Button variants="primary" size="small">
              적용
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
