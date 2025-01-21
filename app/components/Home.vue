<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout rows="auto, auto">
            <HTMLLabel row="0" :html="'This is some html string'" :fontSize="18" fontFamily="AreaNormal-Extrabold"/>
            <Label row="1" :text="'This is some html string'" :fontSize="18" fontFamily="AreaNormal-Extrabold"/>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
