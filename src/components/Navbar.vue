<template>
    <div>
        <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/">HOME</router-link><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/album">ALBUM</router-link></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/shopcart">SHOPCART</router-link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><router-link to="/orders">ORDERS</router-link></a>
        </li>
    </ul>
    </div>
</nav>
    </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>
