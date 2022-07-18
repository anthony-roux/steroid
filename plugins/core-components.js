import Vue from "vue";

// NAVIGATION
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

Vue.component("TheHeader", TheHeader);
Vue.component("TheSidenav", TheSidenav);
Vue.component("TheSideNavToggle", TheSideNavToggle);


// ADMIN
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

Vue.component("AdminPostForm", AdminPostForm);


// UI
import AppButton from "@/components/UI/AppButton.vue";
import AppControlInput from "@/components/UI/AppControlInput.vue";

Vue.component("AppButton", AppButton);
Vue.component("AppControlInput", AppControlInput);


// POSTS
import PostPreview from "@/components/Posts/PostPreview.vue";
import PostList from "@/components/Posts/PostList.vue";

Vue.component("PostPreview", PostPreview);
Vue.component("PostList", PostList);
