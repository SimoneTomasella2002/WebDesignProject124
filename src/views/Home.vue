<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="first-paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio sed accusantium facere, minus natus laboriosam quas quia illo nesciunt aliquam corporis. Ex nisi quas itaque, beatae molestias ratione praesentium.</p>
                </div>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
                <div class="blank-space"></div>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
                <div class="second-paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio sed accusantium facere, minus natus laboriosam quas quia illo nesciunt aliquam corporis. Ex nisi quas itaque, beatae molestias ratione praesentium.</p>
                </div>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
                <div class="blank-space"></div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <img
                    src="../assets/images/la-guida-del-gattino1.jpg"
                    :width="300"
                    cover
                    alt="Immagine di un gattino rossiccio patato lo voglio strapazzare"
                ></img>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
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