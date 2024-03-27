export default [
  { path: '/', name:"dashboard", meta: {requireAuth: true}, component: () => import('../views/DashboardView.vue')},
  { path: '/login', name:"login", meta: {requireAuth: false}, component: () => import('../views/auth/LoginView.vue')},
  { path: '/artist-signup', name:"artistSignup",  meta: {requireAuth: false}, component: () => import('../views/auth/ArtistSignUpView.vue')},
  { path: '/signup', name:"userSignup", meta: {requireAuth: false}, component: () => import('../views/auth/UserSignUpView.vue')},
  { path: '/change-password', name:"changePassword", meta: {requireAuth: false}, component: () => import('../views/auth/ChangePasswordView.vue')},
  { path: '/reset-password', name:"resetPassword", meta: {requireAuth: false}, component: () => import('../views/auth/ResetPassword.vue')},
  { path: '/confirm-email', name:"confirmEmail", meta: {requireAuth: false}, component: () => import('../views/auth/ConfirmEmailView.vue')},
  { path: '/choose-account-type', name:"accountType", meta: {requireAuth: false}, component: () => import('../views/auth/ChooseAccountTypeView.vue')},
]