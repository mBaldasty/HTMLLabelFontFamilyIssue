<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <StackLayout>
          <Label text="OTF"/>
          <HTMLLabel :html="'This is some html string'" :fontSize="18" fontFamily="AreaNormal-Semibold"/>
          <HTMLLabel :text="'This is some html string'" :fontSize="20" fontFamily="AreaNormal-Semibold"/>
          <Label :text="'This is some html string'" :fontSize="20" fontFamily="AreaNormal-Semibold"/>


          <Label text="TTF" marginTop="20"/>
          <HTMLLabel :html="'This is some html string'" :fontSize="18" fontFamily="Heebo-Medium"/>
          <HTMLLabel :text="'This is some html string'" :fontSize="20" fontFamily="Heebo-Medium"/>
          <Label :text="'This is some html string'" :fontSize="20" fontFamily="Heebo-Medium"/>
        </StackLayout>
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
