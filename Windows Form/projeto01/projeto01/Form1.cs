using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace projeto01
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string nome;
            string email;
            string celular;

            nome = textBox1.Text;
            email = textBox2.Text;
            celular = textBox3.Text;

            label3.Text = label3.Text + nome + " | " + email + " | " + celular + "\n";
        }
    }
}
