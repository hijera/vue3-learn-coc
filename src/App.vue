<template>
  <Header  />
  <!--:title="title" :links="links" -->
    <div class="wrapper-content">
      <div class="container">
        <router-view>

        </router-view>
        <h1>Hello</h1>
        <!-- about -->

        <p>У нас есть вакансии <a href="/vacancy">тут</a></p>
      </div>
    </div>
  <Footer  />
  <!--:links="links"-->
</template>

<script>
import {site,links,app} from '@/_config';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
export default {
  components: {Footer, Header},
  data()
  {
    return {
      test: site.home,
      title: app.title,
      links: links
    }
  }
}
</script>

