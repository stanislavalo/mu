<template>
<section>
  <div class=" hidden-sm-and-down black"> 
    <div v-for="(item, index) in items" :key="index"
      :class="['social-icon' ,item.icon]">
      <a :href="item.href"
        target="_blank" :title="item.title">
        <i :class="['fa', item.iconf]"></i>
      </a>
    </div>
  </div>
  <div class="hidden-md-and-up black">
    <span v-for="(item, index) in items" :key="index"
      :class="['social-icon' ,item.icon]">
      <a :href="item.href"
        target="_blank" :title="item.title">
        <i :class="['fa', item.iconf]"></i>
      </a>
    </span>
  </div>
</section>
</template>
<script>
export default {
  data(){
    return { 
      items:[{
          icon:"facebook",
          iconf:"fa-facebook", 
          title:"Facebook",
          href:"https://www.facebook.com/akademieved/?fref=ts",
        },
        {
          icon:"twitter",
          iconf:"fa-twitter",
          title:"Twitter",
          href: "https://twitter.com/akademie_ved_cr",
        },
        {
          icon:"youtube",
          iconf:"fa-youtube", 
          title: "YouTube",
          href:"https://www.youtube.com/channel/UCnduFk5TNpVBcxgS8UZ-VdQ"
          },
        {
          icon:"instagram",
          iconf:"fa-instagram",
          title: "Instagram", 
          href:"https://www.instagram.com/akademievedcr/",
        } 
      ]
    };
  }
}
</script>
<style scoped>
.social-icon{
  padding-left: 8px;
  padding-right: 10px
}
.fa {
  padding: 5px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  color: white;
}
.blue-head{
  background: #252697;
}
</style>