// Conexion a la API de todo's

const url = "https://playground.4geeks.com/apis/fake/todos/user/Samuel";

export const apiConnect = async () => {
  // GET

  const optionsGetList = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, optionsGetList);
    if (response.status != 200) {
      console.log("hubo un error en solicitud ", response.status);
    }

    const body = await response.json();
    console.log(body);
    return body;
  } catch (error) {
    console.log(error);
  }
};

//POST

export async function postData() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify([]),
    });
  } catch (error) {
    console.log("Error al hacer post ", error);
  }
}

// PUT

export async function putData(data, task) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify([{ label: data, done: false }, ...task]),
      headers: {
        "Content-type": "Application/json",
      },
    });
    if (response.status != 200) {
      console.log("hubo un error al subir nuevas tareas ", response.status);
      return;
    }
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTask(taskDelete) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(taskDelete),
    });
    if (response.status != 200) {
      console.log("Hubo un error en el put de deleteTask");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

// DELETE

export async function deleteData() {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
      },
    });
    if (response.status != 200) {
      console.log("hubo un error al eliminar ", response.status);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
