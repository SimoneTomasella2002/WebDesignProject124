<template>
    <main>  
        <h1>Hello world</h1>

        <div class="first-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio sed accusantium facere, minus natus laboriosam quas quia illo nesciunt aliquam corporis. Ex nisi quas itaque, beatae molestias ratione praesentium.</p>
        </div>

        <div class="blank-space"></div>

        <div class="second-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio sed accusantium facere, minus natus laboriosam quas quia illo nesciunt aliquam corporis. Ex nisi quas itaque, beatae molestias ratione praesentium.</p>
        </div>
    </main>
</template>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div.first-paragraph {
        width: 50%;
    }

    div.blank-space {
        height: 50px;
    }

    div.second-paragraph {
        width: 75%;
    }
</style>