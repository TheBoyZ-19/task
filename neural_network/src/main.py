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

    print(users_data.describe())
    print(groups_data.describe())
    print(attends_data.describe())
    print(dict_data.describe())

    """
        TODO: Надо разобрать файлы, посмотреть на None данные и попробовать обучить LSTM или сверточную сеть, 
        или объеденить LSTM и CNN 
    """
