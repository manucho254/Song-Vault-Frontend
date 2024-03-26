export default [
  { path: '/', name:"dashboard", component: () => import('../views/DashboardView.vue')},
  { path: '/login', name:"login", component: () => import('../views/auth/LoginView.vue')},
  { path: '/artist-signup', name:"artistSignup", component: () => import('../views/auth/ArtistSignUpView.vue')},
  { path: '/signup', name:"userSignup", component: () => import('../views/auth/UserSignUpView.vue')},
  { path: '/change-password', name:"changePassword", component: () => import('../views/auth/ChangePasswordView.vue')},
  { path: '/reset-password', name:"resetPassword", component: () => import('../views/auth/ResetPassword.vue')},
  { path: '/confirm-email', name:"confirmEmail", component: () => import('../views/auth/ConfirmEmailView.vue')},
  { path: '/choose-account-type', name:"accountType", component: () => import('../views/auth/ChooseAccountTypeView.vue')},
]