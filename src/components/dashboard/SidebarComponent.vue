<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Song Vault</h2>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">MENU</span>
      <div class="d-flex flex-column gap-2 px-3">
        <router-link to="/dashboard">Home</router-link>
        <router-link to="/dashboard">Explore</router-link>
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">SAVED PLAYLISTS</span>
      <div class="d-flex flex-column gap-2 px-3">
        <router-link to="/dashboard/playlist/id">Happy</router-link>
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">YOUR LIBRARY</span>
      <div class="d-flex flex-column gap-2 px-3">
        <router-link to="/dashboard/playlist/id">Recent</router-link>
        <router-link to="/dashboard/playlist/id">Favorites</router-link>
        <router-link to="/dashboard/playlist/id">Playlist</router-link>
        <router-link to="/dashboard/playlist/id">Following</router-link>
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <span class="text-grey">GENERAL</span>
      <div class="d-flex flex-column gap-2 px-3">
        <router-link to="/dashboard/playlist/id">Settings</router-link>
        <router-link to="/dashboard/playlist/id">Account</router-link>
        <router-link to="/dashboard/playlist/id">Logout</router-link>
      </div>
    </div>
  </div>
</template>
