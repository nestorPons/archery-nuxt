
<template>
    <div class="flex flex-col min-h-screen">
        
        <header>
            <nav-bar></nav-bar>
        </header>
    
        <main>
            <slot />
        </main>
        <footer class="bg-gray-900 text-white w100% flex justify-evenly p1rem">
            <div>Create by Néstor Pons</div>
            <div class="" >NestorPons@gmail.com</div>
        </footer>
    </div>
</template>
