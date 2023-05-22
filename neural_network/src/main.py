import os

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split


def main() -> None:
    users_data = pd.read_csv(os.path.join(os.getcwd(), "src/datasets/users.csv"))
    groups_data = pd.read_csv(os.path.join(os.getcwd(), "src/datasets/groups.csv"))
    attends_data = pd.read_csv(os.path.join(os.getcwd(), "src/datasets/attend.csv"))
    dict_data = pd.read_excel(os.path.join(os.getcwd(), "src/datasets/dict.xlsx"))

    # print(users_data.head())
    # print(groups_data.head())
    # print(attends_data.head())
    # print(dict_data.head())

    print("user_data", users_data.columns)
    print("groups_data", groups_data.columns)
    print("attends_data", attends_data.columns)
    print("dict_data", dict_data.columns)

    print(users_data.describe())
    print(users_data.isnull().sum())

    print(groups_data.describe())
    print(groups_data.isnull().sum())

    print(attends_data.describe())
    print(attends_data.isnull().sum())

    print(dict_data.isnull().sum())
    print(dict_data.describe())

    # Удаляем null в dict_data, так как в столбцах d_level2 и d_level3 все поля null
    dict_data = dict_data.dropna(axis="columns")
    print(dict_data.isnull().sum())

    all_data = attends_data.join(
        users_data.set_index("уникальный номер"),
        on="уникальный номер участника",
    )

    print(all_data.columns)
    print(all_data.head())

    target = all_data["уникальный номер группы"]
    features = all_data.drop(["уникальный номер группы"], axis=1)

    X_train, X_test, y_train, y_test = train_test_split(
        features, target, test_size=0.25, random_state=101
    )
    """
        model = RandomForestRegressor(max_depth=11, n_estimators=80, random_state=12345)
        model.fit(X_train, y_train)
        predictions_train = model.predict(X_train)
        predictions_valid = model.predict(y_train)
        print("MAE на обучающей выборке: ", mean_absolute_error(X_test, predictions_train))
        print(
            "MAE на валидационной выборке: ", mean_absolute_error(y_test, predictions_valid)
        )

        Не работает, ну и не надо
    """

    """
        TODO: Надо разобрать файлы, посмотреть на None данные. 
        Почитал, посмотрел лучше всего использовать DLRM (Deep Learning Recommendation Model)

        Что надо:
        - из users дата рождения, пол и место жительства
        - из attends узнать id группы, онлайн / оффлайн (может быть что-то еще)
        - (нужно ли оно для обучения) из groups по id группы из attends узнать направление, время, дата

        Для начала соединить attends, users и groups, 
        где все колонки это features, а group_id это target :)
    """
