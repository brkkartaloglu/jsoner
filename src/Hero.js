import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { MenuProps, useStyles } from "./utils";
import { Box, Button, CircularProgress } from "@material-ui/core";

const Hero = () => {
  const localURL = "http://localhost:3001";
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(null);
  let fail = false;

  async function fetchData() {
    try {
      const response = await fetch("data.json");
      setData(await response.json());
    } catch (err) {
      console.log("Hata olustu");
      fail = true;
      logData();
    }
  }

  async function logData() {
    if (!fail) {
      await fetch(`${localURL}/log`, {
        method: "POST",
        body: JSON.stringify({
          logData: `Generated json file for the programs: ${selected} at`,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      await fetch(`${localURL}/log`, {
        method: "POST",
        body: JSON.stringify({
          logData: `Couldn't load the page, control the data.json file under build folder at`,
        }),
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const programs_data = data?.programs;
  if (programs_data) {
    const handleChange = (event) => {
      const value = event.target.value;
      if (value[value.length - 1] === "all") {
        setSelected(
          selected.length === programs_data.length ? [] : programs_data
        );
        return;
      }
      setSelected(value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if (selected.length === 0) {
        alert("Nothing selected");
      } else {
        let wd = [];
        for (let item in selected) {
          for (let data in programs_data) {
            if (selected[item] === programs_data[data].name) {
              wd.push(programs_data[data]);
            }
          }
        }
        localStorage.setItem("data", JSON.stringify(wd));
        let writ = `{"programs":${localStorage.getItem("data")}}`;
        TextFile(writ);
        logData();
        setSelected([]);
      }
    };

    const TextFile = (writ) => {
      const element = document.createElement("a");
      const textFile = new Blob([writ], {
        type: "text/plain",
      }); //pass data from localStorage API to blob
      // const textFile = new Blob([localStorage.getItem("data")], {
      //   type: "text/plain",
      // });
      element.href = URL.createObjectURL(textFile);
      element.download = "program_install.json";
      document.body.appendChild(element);
      element.click();
      localStorage.clear();
    };
    return (
      <section className="hero">
        <div className="hero-center">
          <article className="hero-info">
            <h2>
              Application dependency <br /> template
            </h2>
            <p>
              To install your application dependencies select from the below
              list and generate the template, then add the file in your
              repository. If you can't find it in the list, you can send a
              request.
            </p>
          </article>
        </div>
        <div className="quiz quiz-small">
          <FormControl className={classes.formControl}>
            <InputLabel id="mutiple-select-label">Select programs</InputLabel>
            <Select
              labelId="mutiple-select-label"
              multiple
              value={selected}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {programs_data.map((program) => (
                <MenuItem key={program.id} value={program.name}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(program.name) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={program.name} />
                </MenuItem>
              ))}
            </Select>
            <br></br>

            <br></br>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Generate
            </Button>
            <br></br>
            <Button
              title="dotnetadmins@isbank.com.tr"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() =>
                (window.location = `mailto:dotnetadmins@isbank.com.tr?Subject=New Dependency Request&body=Merhaba aşağıda bilgileri verilen programı listeye ekleyebilir misiniz?%0D%0A
                Program Adı:%0D%0A
                Versiyonu:%0D%0A
                Güncel İndirme Linki:%0D%0A
                Detaylı Bilgi:%0D%0A
                %20%0D%0A
                İyi çalışmalar.`)
              }
            >
              Request New Dependency
            </Button>
          </FormControl>
        </div>
      </section>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
};

export default Hero;
