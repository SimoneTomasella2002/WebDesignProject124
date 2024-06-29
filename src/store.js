import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStore = defineStore("store", () => {
  const leftImagesArray = ref([
    "/Illustrazioni/Alessandro/Alessandro1.svg",
    "/Illustrazioni/Alessandro/Alessandro2.svg",
    "/Illustrazioni/Alessandro/Alessandro3.svg",
    "/Illustrazioni/Alessandro/Alessandro4.svg",
    "/Illustrazioni/Alessandro/Alessandro5.svg",
    "/Illustrazioni/Alessandro/Alessandro6.svg",
    "/Illustrazioni/Alessandro/Alessandro7.svg",
    "/Illustrazioni/Alessandro/Alessandro8.svg",
    "/Illustrazioni/Alessandro/Alessandro9.svg",
    "/Illustrazioni/Alessandro/Alessandro10.svg",
  ]);

  const rightImagesArray = ref([
    "/Illustrazioni/Tara/Tara1.svg",
    "/Illustrazioni/Tara/Tara2.svg",
    "/Illustrazioni/Tara/Tara3.svg",
    "/Illustrazioni/Tara/Tara4.svg",
    "/Illustrazioni/Tara/Tara5.svg",
    "/Illustrazioni/Tara/Tara6.svg",
    "/Illustrazioni/Tara/Tara7.svg",
    "/Illustrazioni/Tara/Tara8.svg",
    "/Illustrazioni/Tara/Tara9.svg",
    "/Illustrazioni/Tara/Tara10.svg",
  ]);

  const leftImages = computed(() => leftImagesArray.value);
  const rightImages = computed(() => rightImagesArray.value);

  function changeLeftImages(name) {
    leftImagesArray.value = [
      `/Illustrazioni/${name}/${name}1.svg`,
      `/Illustrazioni/${name}/${name}2.svg`,
      `/Illustrazioni/${name}/${name}3.svg`,
      `/Illustrazioni/${name}/${name}4.svg`,
      `/Illustrazioni/${name}/${name}5.svg`,
      `/Illustrazioni/${name}/${name}6.svg`,
      `/Illustrazioni/${name}/${name}7.svg`,
      `/Illustrazioni/${name}/${name}8.svg`,
      `/Illustrazioni/${name}/${name}9.svg`,
      `/Illustrazioni/${name}/${name}10.svg`,
    ];
  }

  function changeRightImages(name) {
    rightImagesArray.value = [
      `/Illustrazioni/${name}/${name}1.svg`,
      `/Illustrazioni/${name}/${name}2.svg`,
      `/Illustrazioni/${name}/${name}3.svg`,
      `/Illustrazioni/${name}/${name}4.svg`,
      `/Illustrazioni/${name}/${name}5.svg`,
      `/Illustrazioni/${name}/${name}6.svg`,
      `/Illustrazioni/${name}/${name}7.svg`,
      `/Illustrazioni/${name}/${name}8.svg`,
      `/Illustrazioni/${name}/${name}9.svg`,
      `/Illustrazioni/${name}/${name}10.svg`,
    ];
  }

  return {
    leftImages,
    rightImages,
    changeLeftImages,
    changeRightImages,
  };
});
