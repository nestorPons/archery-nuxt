
<template>
    <NuxtLoadingIndicator />
    <div class="">
        <header>
            <NavBar/>
        </header>
    
        <main>
            <slot />
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
</template>
