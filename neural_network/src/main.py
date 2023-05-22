import os

import pandas as pd
import tensorflow as tf


def main() -> None:
    users_data = pd.read_csv(os.path.join(os.getcwd(), "src/datasets/users.csv"))
    groups_data = pd.read_csv(os.path.join(os.getcwd(), "src/datasets/groups.csv"))
    attends_data = pd.read_csv(os.path.join(os.getcwd(), "src/datasets/attend.csv"))
    dict_data = pd.read_excel(os.path.join(os.getcwd(), "src/datasets/dict.xlsx"))

    print(users_data.head())
    print(groups_data.head())
    print(attends_data.head())
    print(dict_data.head())

    # print(users_data.describe())
    # print(groups_data.describe())
    # print(attends_data.describe())
    # print(dict_data.describe())

    print(users_data.columns)
    print(groups_data.columns)

    """
        TODO: Надо разобрать файлы, посмотреть на None данные и попробовать обучить LSTM или сверточную сеть, 
        или объединить LSTM и CNN 

        Что надо:
        - из users дата рождения, пол и место жительства
        - из attends узнать id группы, онлайн / оффлайн (может быть что-то еще)
        - из groups по id группы из attends узнать направление, время, дата

        Для начала соединить attends, users и groups, 
        где все колонки это features, а group_id это target :)
    """
