<template>
  <div class="xs:bg-white sm:pb-10">
    <div class="container mx-auto hidden xs:flex justify-end xs:px-[28px] pt-10 pb-8">
      <a-badge-code class="mr-2" code="123456"/>
      <a-share class="cursor-pointer hover:opacity-80 transition-all"/>
    </div>
    <div class="container xs:flex justify-between sm:justify-start items-start mx-auto xs:px-[28px] bg-grey-100 xs:bg-white">
      <m-image/>
      <div class="xs:min-w-[19.75rem] xs:max-w-[24rem] sm:max-w-[25rem] base:max-w-[32.75rem] sm:mr-6">
        <div class="bg-white px-4 sm:px-0">
          <m-info-name/>
          <div class="sm:hidden xs:px-6 xs:pb-6 xs:pt-2 xs:shadow-xs xs:rounded-lg relative xs:bg-grey-50 xs:mt-8">
            <m-offer-box/>
            <m-media/>
          </div>
        </div>
        <m-info-description/>
        <div class="bg-white px-4 sm:px-0 pb-6 sm:pb-0 rounded-b-md">
          <a-border/>
          <div class="py-5">
            <a-badge-action/>
          </div>
          <a-border/>
          <a-base-text class="text-grey-500 mt-5" text="Тип вина"/>
          <a-badge-expert class="mt-3" text="Wine-98"/>
        </div>
      </div>
      <div class="hidden flex-grow sm:max-w-[19.75rem] base:max-w-[21rem] ml-auto sm:block xs:px-6 xs:pb-6 xs:pt-2 xs:shadow-xs xs:rounded-lg relative xs:bg-grey-50">
        <m-offer-box/>
        <m-media/>
      </div>
    </div>
  </div>
</template>

<script>


import MImage from "../molecules/m-image.vue";
import MInfoName from "../molecules/m-info-name.vue";
import MInfoDescription from "../molecules/m-info-description.vue";
import AButton from "../atoms/a-button-base-primary.vue";
import ABadgeAction from "../atoms/a-badge-action.vue";
import ABadgeExpert from "../atoms/a-badge-expert.vue";
import MOfferBox from "../molecules/m-offer-box.vue";
import ABadgeCode from "../atoms/a-badge-code.vue";
import MMedia from "../molecules/m-media.vue";
import ABorder from "../atoms/a-border.vue";
import ABaseText from "../atoms/a-base-text.vue";
import AShare from "../atoms/a-share.vue";

export default {
  name: 'o-product-details',
  components: {AShare, ABaseText, ABorder, MMedia, ABadgeCode, MOfferBox, ABadgeExpert, ABadgeAction, AButton, MInfoDescription, MInfoName, MImage},
  data() {
    return {}
  },
  props: {
    title: String
  }
}

</script>
