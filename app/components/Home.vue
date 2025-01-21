<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <StackLayout>
          <Label text="TTF Area Normal"/>
          <HTMLLabel :html="'<strong>This</strong> is some html string'" :fontSize="18" fontFamily="Area Normal"/>
          <HTMLLabel :text="'This is some html string'" :fontSize="20" fontFamily="Area Normal"/>
          <Label :text="'This is some html string'" :fontSize="20" fontFamily="Area Normal"/>


          <Label text="TT Heebo" marginTop="20"/>
          <HTMLLabel :html="'<strong>This</strong> is some html string'" :fontSize="18" fontFamily="Heebo"/>
          <HTMLLabel :text="'This is some html string'" :fontSize="20" fontFamily="Heebo"/>
          <Label :text="'This is some html string'" :fontSize="20" fontFamily="Heebo"/>

          <Label text="Comic Sans TTF" marginTop="20"/>
          <HTMLLabel :html="'<strong>This</strong> is some html string'" :fontSize="18" fontFamily="Comic Sans MS"/>
          <HTMLLabel :text="'This is some html string'" class="comic-sans"/>
          <Label :text="'This is some html string'" class="comic-sans"/>

          <Label text="LuismiMurder400 TTF" marginTop="20"/>
          <HTMLLabel :html="'<strong>This</strong> is some html string'" :fontSize="18" fontFamily="Luismi Murder"/>
          <HTMLLabel :text="'This is some html string'" class="luismi"/>
          <Label :text="'This is some html string'" class="luismi"/>

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

<style>
</style>
