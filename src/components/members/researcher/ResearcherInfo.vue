<template>
  <div class="mt-2">
    <p class="pt-2 orange--text ">E-mail::&nbsp;
      <span class="white--text">{{researcher.per_email}}</span>
    </p>
    <p class="py-0 orange--text ">{{$t("researcher.telephone")}}:&nbsp;
      <span class="white--text">{{researcher.telephone}}</span>
    </p>
    <p class="py-0 orange--text ">{{$t("researcher.office")}}::&nbsp;
      <span class="white--text">{{researcher.office}}</span>
    </p>
  </div>
</template>
<script>
export default {
  props:['researcher'],
}
</script>