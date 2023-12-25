<script>
const appId = 'b13711f2';
const appKey = '07ef041dd90f900a76266cc2738bda5b';
const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appId}&app_key=${appKey}`;

function recipeLoader(type = 'Chicken') {
    const url = apiUrl + '&q=${type}';
    fetch(url)
      .then((res) => res.json)
      .then((data) => console.log(data.hits))
      .catch((error) => (console.log(error)));
    
}
        
</script>