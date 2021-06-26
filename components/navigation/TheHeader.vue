<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">BLOG</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
                <nuxt-link to="/admin">Admin</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
                <nuxt-link to="/about">about</nuxt-link>
            </b-navbar-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>
