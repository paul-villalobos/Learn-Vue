<template>
    <div class="row">
            <div class="col-xs-12">
                <footer>
                    <div class="title">
                        <slot name="title"></slot>
                        <span><slot name="subtitle"></slot>Default subtitle - cuando se pasa data</span>
                    </div>
                    <hr>
                    <div class="content">
                        <slot name="content"></slot>
                    </div>
                </footer>
            </div>
        </div>
</template>

<style scoped>
/*  scoped emula el shadow DOM */
div {
    border: 1px solid red;
}

.title {
    color: blue;
}
</style>
