<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Song Vault</h2>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">MENU</span>
      <div class="d-flex flex-column gap-2">
        <router-link to="/dashboard"
          ><span class="d-flex gap-2"><i class="bi bi-house"></i>Home</span></router-link
        >
        <router-link to="/dashboard"
          ><span class="d-flex gap-2"
            ><i class="bi bi-arrow-right-circle"></i>Explore</span
          ></router-link
        >
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">SAVED PLAYLISTS</span>
      <div class="d-flex flex-column gap-2">
        <router-link to="/dashboard/playlist/id">Happy</router-link>
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">YOUR LIBRARY</span>
      <div class="d-flex flex-column gap-2">
        <router-link to="/dashboard/"
          ><span class="d-flex gap-2"><i class="bi bi-clock-fill"></i>Recent</span></router-link
        >
        <router-link to="/dashboard/"
          ><span class="d-flex gap-2"
            ><i class="fa-solid fa-heart-circle-plus"></i>Favorites</span
          ></router-link
        >
        <router-link to="/dashboard/"
          ><span class="d-flex gap-2">
            <img src="../../assets/images/folder-icon.png" width="20" height="20" />Playlists</span
          ></router-link
        >
        <router-link to="/dashboard/"
          ><span class="d-flex gap-2"><i class="fa-solid fa-users"></i>Following</span></router-link
        >
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">GENERAL</span>
      <div class="d-flex flex-column gap-2">
        <router-link to="/dashboard/playlist/id"
          ><span class="d-flex gap-2"><i class="bi bi-gear"></i>Settings</span></router-link
        >
        <router-link to="/dashboard/playlist/id"
          ><span class="d-flex gap-2"><i class="bi bi-person"></i>Account</span></router-link
        >
        <router-link to="/dashboard/playlist/id"
          ><span class="d-flex gap-2"><i class="bi bi-box-arrow-left"></i>Logout</span></router-link
        >
      </div>
    </div>
  </div>
</template>
