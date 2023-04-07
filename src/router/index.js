const router = [
  {
    path: "/pageOne",
    component: resolve => require(['@/pages/pageOne'], resolve)
  }, {
    path: "/pageTwo",
    component: resolve => require(['@/pages/pageTwo'], resolve)
  }
]

export default router