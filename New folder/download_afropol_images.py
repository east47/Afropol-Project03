import requests
import os

urls = [
    "https://afropol.com/wp-content/uploads/2016/05/Almonds-Blanched-1.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Almonds-Flaked-1.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Almonds-Ground-1.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Almonds-Nibbed-2.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Almonds-Raw-With-Skin-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/06/AFROPOL-FINE-FOODS-SLIVERED-ALMONDS.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/Almonds-Smoked-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/Apricots-Dried.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/Banana-Chips-2.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Blue-Poppy-Seeds-1.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Brazil-Nuts-1.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Cashew-Broken.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Cashews-Roasted-Salted-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/CASHEWS-WHOLE-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/10/Cherries-Sour.jpg",
    "https://afropol.com/wp-content/uploads/2016/06/Chia-Seeds-2.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Coconut-Desiccated-Fine-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Coconut-Chips-Raw-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Coconut-Chips-Toasted-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Couscous-Giant-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/10/Cranberries-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/Currants-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/Dates-Pitted-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/Figs-1.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Hazelnuts-Blanched.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Hazelnuts-Ground.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Hazelnut-With-Skin-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Macadamia-Halves-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Breadcrumbs-Panko.jpg",
    "https://afropol.com/wp-content/uploads/2016/07/Peanuts-Blanched.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/PECAN-HALVES-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Pine-Nuts-950-count-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Pistachio-Peeled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Pistachio-Kernels.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Pistachio-Roasted-Salted-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/Prunes-Ashlock-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Pumpkin-Seeds-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Quinoa-Black-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Quinoa-Red-2.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Quinoa-White-1.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/RAISINS-BROWN-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/RAISINS-GOLDEN-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Sesame-Seeds-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/09/SULTANAS-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2015/08/Sunflower-Seeds-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/WALNUT-AMBER-HALVES-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Walnut-Light-Halves-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Walnut-Pieces-scaled.jpg",
    "https://afropol.com/wp-content/uploads/2016/05/Wasabi-Peas-3.jpg",
]

os.makedirs('afropol_images', exist_ok=True)

for url in urls:
    filename = url.split("/")[-1]
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(f'afropol_images/{filename}', 'wb') as f:
                f.write(response.content)
            print(f'Downloaded {filename}')
        else:
            print(f'Failed to download {filename} with status code {response.status_code}')
    except Exception as e:
        print(f'Error downloading {filename}: {e}')
